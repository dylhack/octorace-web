use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct ApiUserConnection {
    #[serde(alias = "type")]
    pub(crate) conn_type: String,
    pub(crate) name: String,
}

#[derive(Debug, Deserialize)]
pub struct ApiUser {
    pub(crate) id: String,
    pub(crate) username: String,
    pub(crate) avatar: String,
    pub(crate) discriminator: String,
    pub(crate) email: String,
}