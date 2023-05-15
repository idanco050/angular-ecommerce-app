const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");

const pKey = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCzZLTtmLi0uxzl\n" +
    "bowW4jh14m9y6u1nAqU1Vo87x49kL9XM2LUEQ3KIm0xsAVKU4VsClWTPsoHfO1+C\n" +
    "SIrTvUCrrikQIa7Iu2kMq7rklVhDkJ+kPsffgaL2SmrhUCnLwJ3srFnIBqhcZtfR\n" +
    "c9pjFGPEuRrkHClwXcxnkShJtRBQ/F4lszf2FSuL6mjdICQhp5H0NmfZkikXhDQi\n" +
    "kIXCY+XByeQZ8ZdpM1jRRvkwO5Bgcol4580d0HnC44cCqPxagwRHF+P6ukhZofWE\n" +
    "rE3IMc8+bjsxpeWfYJq4njkQkQJCfrIB6/R/RvJrNc1+XLMBdqOARlaJBY19pkgj\n" +
    "G/ljcCdZAgMBAAECggEALjVFiWHqSdtcoRhti0NwCaVu0aoDxqHezjNip6JKpCLS\n" +
    "Lnavgc6hxOBDuhpJHEJEABFdK0auv0J64oMvB0VbUB2HRDl43QmxEGt3s4NofdbV\n" +
    "2Ce3sjGhOVGH4EuWyH3v79OhOK3GVi7Dbpcp7JWG8VhAvfsnDWOL0C2KtBmof0Nj\n" +
    "cLxZvf2o5Log3ZeAmSt6cD5F7BN4mM9FiuNra8X3RpiZk/z8VHTURFr8HeWsbF3h\n" +
    "C4GHpUmy6T5R/rA/ZcokF7umzjxOZDdsoybUP76rADEALEU+uHaFzz0ldryFUnvZ\n" +
    "mn57l+Hpzo1fZDCQW+rZm5/GU1ykVKtuTy3PKXJjZQKBgQDFOMGpV4kFjkCw4Mxi\n" +
    "JqeA8KszpsX9K+Ok5aMWAnyrqouk4f5YWpf7D4yFmreXTkR5eRzh1nDfraSCGwXP\n" +
    "YLFNvX64pP2PbmNYe9e2WhRp6NSz15fHifCnrYFN/dK9jmziSp4eZio1c5yrDMMx\n" +
    "wauru+bfS8nbMH2kdhuZ0bXBOwKBgQDo27gmga6yK4lkpKchxHdBA+WdcCYqXoyk\n" +
    "fzLytiGQ2zT2nWkWqoAedJCqMeZjh09Efpfuniwsp0QoDp91foUOTJQM7kuRIh1A\n" +
    "r6sf2HfUFhqbhF/Pty7q9s7HEsYXtXZO8epWaymKx3obnGk592wiHZzuIWvN8UM5\n" +
    "UIYMJI/wewKBgFqQwKXR87MgauaOpGxiEcNtQUD70al70RK0/RorVDLEo1G5EcJi\n" +
    "/62jq0TjEnGh2GHr0u6GOdkNdSDl5dogLetkHGAQK/wElgxY+mrbnMoxyBM56pIP\n" +
    "7vog++LjrzWqxKd52nhdM/7Ns2D9AFnF9N5s8A0UUYKdFuVB81TEb3FnAoGBAK6n\n" +
    "vuQC+QliZlc6uLE3L0twpNUFvVqiOFNZpNkvitWf1YX0Y1JA6H/vZmKBsxCL+QSi\n" +
    "/0pXEUMc4p44+ZmjICGtho58Xemp8M8H9A6ayqYlPifPjh26hFJwdIAUsMgvr2Ff\n" +
    "Sikvj6UsIYZ8NuDnmA+urnpeTwHVKFrg7upEskHpAoGBAJ/lTyjHzcxFa71ywJlK\n" +
    "o9kA8fKiKuksBUM4cyUGgm4H9hyza5kQcin9cQIiI3eXmekClBxAdkKxndE5njON\n" +
    "f/U+NYBd8kuwr2BA9DxOSybpdO3sDwH+D3gjbSryywBOzFDlh7rvGVnYdI89CVRj\n" +
    "VB3H5zumjGUiVGlk7w9E75gs"

// Config .env file
dotenv.config({
  path: path.join(__dirname, `env/${process.env.NODE_ENV}.env`),
});

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router index
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Health check
app.get("/", (req, res) => {
  res.status(200).send("Health Check");
});

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || null;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} using ${ENV} env.`);
});
