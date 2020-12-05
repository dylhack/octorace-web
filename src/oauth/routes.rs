use crate::oauth::{oauth_request, OauthClient};
use oauth2::reqwest::http_client;
use oauth2::{AuthorizationCode, CsrfToken, Scope, TokenResponse};
use rocket::get;
use rocket::http::{Cookie, Cookies};
use rocket::response::Redirect;
use rocket::State;

#[get("/")]
pub fn oauth_main(client: State<OauthClient>) -> Redirect {
    let (authorize_url, csrf_state) = client
        .authorize_url(CsrfToken::new_random)
        .add_scope(Scope::new("email".to_string()))
        .add_scope(Scope::new("identify".to_string()))
        .add_scope(Scope::new("connections".to_string()))
        .url();

    Redirect::to(authorize_url.to_string())
}

#[get("/callback?<code>&<state>")]
pub fn oauth_callback(
    client: State<OauthClient>,
    code: String,
    state: String,
    mut cookies: Cookies,
) -> Redirect {
    let code = AuthorizationCode::new(code);

    let token_res = client.exchange_code(code).request(http_client);

    return if let Ok(token) = token_res {
        let discord_token = token.access_token();

        let cookie = Cookie::build("discord_token", discord_token.secret().clone())
            .path("/")
            .secure(true)
            .finish();

        cookies.add(cookie);
        let res = oauth_request(
            "users/@me/connections",
            token.access_token().secret().clone(),
        )
        .unwrap();
        format!(
            "{}\nCookie: {}",
            res.text().unwrap(),
            cookies.get("discord_token").unwrap().value()
        );
        Redirect::to("/")
    } else {
        "Something went wrong..".to_string();
        Redirect::to("/")
    };
}
