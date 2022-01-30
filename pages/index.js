import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";
import React from "react";
import { useRouter } from "next/router"; // hook

function Title(props) {
  // props = propriedades do REACT
  // console.log(props); // mostra o objeto
  //console.log(props.children); //mostra o valor/conteúdo
  const Tag = props.tag || "h1"; // valor padrão OU coloca H1, caso não ache
  return (
    // JSX permite tag vazia = <></>
    <>
      <Tag>{props.children}</Tag>
      {/* CSS in JS */}
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["900"]};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
// Os estilos de css ficam somente no componente,
// não englobando a página inteira

// Componente React
// function HomePage() {
//   // JSX (JavaScript XML)
//   return (
//     <div>
//       <GlobalStyle /> {/*Estilos globais de css*/}
//       <Title tag="h2">Boas vindas de volta!</Title>
//       <h2>Aluracord - Alura Matrix</h2>
//     </div>
//   );
// }

//export default HomePage;

export default function HomePage() {
  //const username = "peas";
  // const username = "DavidMach2";
  //const username = "omariosouto";
  const [username, setUsername] = React.useState("DavidMach2");
  const roteamento = useRouter();

  return (
    <>
      {/* <GlobalStyle /> */}
      <Box // mesmo que DIV do HTML
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            //"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)",
            "url(https://www.10wallpaper.com/wallpaper/1366x768/1208/Aesthetic_Dream_Space_HD_Desktop_wallpaper_16_1366x768.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault(); // para de atualizar a pagina
              console.log("Alguem submeteu o form");
              roteamento.push("/chat");
              //window.location.href = "/chat";
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Title tag="h2">Boas vindas de volta!</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            {/* <input
              type="text"
              value={username}
              //onChange={function handler() {
              onChange={function (event) {
                // onChange = state
                console.log("usuario digitou", event.target.value);
                // Onde está o valor?
                const valor = event.target.value;
                //Trocar o valor da variavel
                // através do REACT e avise quem precisa
                setUsername(valor);
              }}
            /> */}

            <TextField
              value={username}
              onChange={function (event) {
                console.log("usuario digitou", event.target.value);
                const valor = event.target.value;
                setUsername(valor);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />

            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals[999],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
