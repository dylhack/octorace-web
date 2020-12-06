FROM rustlang/rust:nightly

RUN USER=root cargo new --bin octorace

WORKDIR ./octorace
COPY ./Cargo.toml ./Cargo.toml
RUN cargo build --release
RUN rm src/*.rs

ADD . ./

RUN rm ./target/release/deps/octorace*

EXPOSE 8000

CMD ["cargo", "run", "--release"]

