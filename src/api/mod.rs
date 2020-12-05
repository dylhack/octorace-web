use crate::oauth::oauth_request;
use rocket::http::ContentType;
use rocket::http::{Cookies, Status};
use rocket::request::Request;
use rocket::response;
use rocket::response::{Responder, Response};
use rocket::get;
use rocket_contrib::json;
use rocket_contrib::json::Json;
use rocket_contrib::json::JsonValue;

#[derive(Debug)]
pub struct ApiResponse {
    json: JsonValue,
    status: Status,
}

impl<'r> Responder<'r> for ApiResponse {
    fn respond_to(self, req: &Request) -> response::Result<'r> {
        Response::build_from(self.json.respond_to(&req).unwrap())
            .status(self.status)
            .header(ContentType::JSON)
            .ok()
    }
}

#[get("/user")]
pub fn get_user(cookies: Cookies) -> ApiResponse {
    let token = cookies.get("discord_token");
    return match token {
        Some(token) => {
            let res = oauth_request("users/@me/connections", token.value().to_string()).unwrap();
            if res.status().as_u16() == 200 {
                ApiResponse {
                    json: res.json().unwrap(),
                    status: Status::Ok,
                }
            } else {
                ApiResponse {
                    json: json!({"Error": "Something went wrong please try again later"}),
                    status: Status::InternalServerError,
                }
            }

        }
        None => ApiResponse {
            json: json!({"Error": "forbidden"}),
            status: Status::Forbidden,
        },
    };
}
