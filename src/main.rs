#![feature(decl_macro)]

mod api;
mod macros;
mod oauth;

use crate::oauth::create_oauth_client;
use crate::oauth::routes::*;
use crate::api::*;

use rocket::get;
use rocket::http::Cookies;
use rocket::routes;
use rocket_contrib::serve::StaticFiles;

fn main() {
    let client = create_oauth_client();
    rocket::ignite()
        .manage(client)
        .mount("/", StaticFiles::from(crate_relative!("/public")))
        .mount("/oauth", routes![oauth_main, oauth_callback])
        .mount("/api", routes![get_user])
        .launch();
}
