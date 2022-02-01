import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";
import { useRouter } from "next/router";

export default function ChatPage() {
  const [mensagem, setMensagem] = React.useState(""); //array
  const [listaDeMensagens, setListaDeMensagens] = React.useState([]); //array
  const router = useRouter();
  const username = router.query.username;

  /*
    // Usuário
    - Usuário digita no campo textarea
    - Aperta enter para enviar
    - Tem que adicionar o texto na listagem
    
    // Dev
    - [X] Campo criado
    - [X] Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)
    - [X] Lista de mensagens 
    */

  // function removeMessage(messageId) {
  //   const filterMessageClicked = list.filter((mensagem) => {
  //     return mensagem.id != messageId;
  //   });
  //   setListaDeMensagens(filterMessageClicked);
  // }

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: listaDeMensagens.length + 1,
      de: username,
      texto: novaMensagem,
    };

    setListaDeMensagens([
      mensagem,
      ...listaDeMensagens, // ... = Sintaxe de Espalhamento (Spread syntax)
    ]);
    setMensagem(""); //Limpar a variavel
  }

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: appConfig.theme.colors.primary[500],
        //backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
        backgroundImage: `url(http://simi.org.br/files/2018/OUTUBRO/NASA/Terra.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header user={username} />
        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          {/* ta mudando o valor: {mensagem} Teste */}
          {/* <MessageList mensagens={[]} /> */}
          {/* {listaDeMensagens.map((mensagemAtual) => {
            return (
              <li key={mensagemAtual.id}>
                {mensagemAtual.de}:{mensagemAtual.texto}
              </li>
            );
          })} */}
          <MessageList mensagens={listaDeMensagens} />
          <Box
            as="form"
            onSubmit={(event) => {
              event.preventDefault(); // reseta o campo após o Enter
              handleNovaMensagem(mensagem);
            }}
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                // => = arrow function
                const valor = event.target.value;
                setMensagem(valor);
              }}
              onKeyPress={(event) => {
                //para saber qual tecla foi pressionada
                if (event.key == "Enter") {
                  event.preventDefault(); // reseta o campo após o Enter
                  handleNovaMensagem(mensagem);
                  //console.log(event);
                  // setlistaDeMensagens([
                  //   ...listaDeMensagens, // ... = Sintaxe de Espalhamento (Spread syntax)
                  //   mensagem,
                  // ]);
                  // setMensagem(""); //Limpar a variavel
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "6px 8px",
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: "12px",
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <Button
              type="submit"
              variant="tertiary"
              colorVariant="positive"
              label="Enviar"
              //href=
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header(props) {
  return (
    <>
      <Box
        styleSheet={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text variant="heading5">Chat - {props.user}</Text>
        <Button
          variant="tertiary"
          colorVariant="negative"
          label="Sair"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  //console.log("MessageList", props);
  //console.log(props);
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflow: "scroll",
        display: "flex",
        flexDirection: "column-reverse",
        flex: 1,
        color: appConfig.theme.colors.neutrals["000"],
        marginBottom: "16px",
      }}
    >
      {props.mensagens.map((mensagem) => {
        return (
          <Text
            key={mensagem.id}
            tag="li"
            styleSheet={{
              borderRadius: "5px",
              padding: "6px",
              marginBottom: "12px",
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                boxShadow: "2px 1px 2px gray",
                borderRadius: "100px",
              }}
            >
              <Image
                styleSheet={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "8px",
                  boxShadow: "2px 5px 5px black",
                }}
                //src={`https://github.com/vanessametonini.png`}
                src={`https://github.com/${mensagem.de}.png`}
              />
              <Text tag="strong">{mensagem.de}</Text>
              <Text
                styleSheet={{
                  fontSize: "12px",
                  marginLeft: "8px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {/* {new Date().toLocaleDateString()} */}
                {/* {new Date().toLocaleDateString()}
                {` `}
                {new Date().toLocaleTimeString()} */}
                {new Date().toLocaleDateString("pt-BR", {
                  year: "2-digit",
                  month: "short",
                  day: "numeric",
                })}
                {` | `}
                {new Date().toLocaleTimeString("pt-BR")}
              </Text>
            </Box>
            {mensagem.texto}
          </Text>
        );
      })}
    </Box>
  );
}
