import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, FormikHelpers, FormikProps } from "formik";
import * as Yup from "yup";
import {
  ButtonArea,
  ConfigurationContainer,
  LoadingText,
  MuiTextField,
  Title,
} from "./style";
import { postChatMessageCompletion } from "../../service/chatGPTCall";
import { useChatGPT } from "../../context/ChatGPTContext";
import { AxiosResponse } from "axios";
import OpenAI from "openai";
import ChatCompletion = OpenAI.ChatCompletion;
import { SelectChangeEvent } from "@mui/material/Select";
import { StartButton } from "../../style";
import { Grid } from "@mui/material";
import SelectField from "./fragments/SelectField";
import { MenuItemsCharacter, MenuItemsMood } from "./fieldData";
import { MuiFormControl, MuiInputLabel } from "./fragments/style";
import Loader from "../../components/Loader/Loader";

export interface ConfigurationValues {
  character1: string;
  mood1: string;
  character2: string;
  mood2: string;
  topic: string;
  duration: number | "";
}

export type ConfigurationKeys =
  | "character1"
  | "mood1"
  | "character2"
  | "mood2"
  | "topic"
  | "duration";

const validationSchema = Yup.object().shape({
  character1: Yup.string().required("Please select Character 1"),
  mood1: Yup.string().required("Please select Mood for Character 1"),
  character2: Yup.string().required("Please select Character 2"),
  mood2: Yup.string().required("Please select Mood for Character 2"),
  topic: Yup.string().required("Please enter the conversation topic"),
  duration: Yup.number()
    .typeError("Please enter a valid number")
    .required("Please enter the conversation duration")
    .min(4, "Minimum duration of 4 messages")
    .max(50, "Maximum duration of 50 messages"),
});

const ConfigurationPage: React.FC = () => {
  const { setResponse } = useChatGPT();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues: ConfigurationValues = {
    character1: "",
    mood1: "",
    character2: "",
    mood2: "",
    topic: "",
    duration: "",
  };

  const generateCustomInput = (values: ConfigurationValues) => {
    return `Create a conversation between ${values.character1} and ${values.character2}. ${values.character1}'s mood is ${values.mood1} and ${values.character2}'s mood is ${values.mood2}. The conversation should have a total of ${values.duration} dialogue changes. The first topic is ${values.topic}.`;
  };

  const handleChange = (
    event:
      | SelectChangeEvent
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    props: FormikProps<ConfigurationValues>,
    name: any,
  ) => {
    props.setFieldValue(name, event.target.value as string, true);
    props.setFieldTouched(name, true);
  };

  const handleSubmit = (
    values: ConfigurationValues,
    { setSubmitting }: FormikHelpers<ConfigurationValues>,
  ) => {
    setSubmitting(true);
    setIsLoading(true);
    postChatMessageCompletion({
      model: "gpt-3.5-turbo-1106",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant designed to output JSON. The JSON represents the conversation between two imaginary cartoon or animated characters. The user gives you two characters and their mood as input, as well as the initial topic of the conversation. Take the mood of the characters into account when creating the dialogue. They are also given a number of conversation switches and how long the conversation should last. The JSON should be in the following format: { dialogues: Array<{ speaker: string, message: string }>[]}",
        },
        {
          role: "user",
          content: generateCustomInput(values),
        },
      ],
      response_format: { type: "json_object" },
      temperature: 1,
      top_p: 1,
      n: 1,
      stream: false,
      max_tokens: 2046,
      presence_penalty: 0,
      frequency_penalty: 0,
    })
      .then((chatGPTResponse: AxiosResponse<ChatCompletion>) => {
        if (
          chatGPTResponse.status === 200 &&
          chatGPTResponse.data.choices[0] &&
          chatGPTResponse.data.choices[0].message.content
        ) {
          setResponse(
            JSON.parse(chatGPTResponse.data.choices[0].message.content),
          );
          navigate("/chat");
          return;
        }
        console.error(
          "Something went wrong response status: ",
          chatGPTResponse.status,
        );
      })
      .catch((error) => {
        console.error("Error calling ChatGPT API:", error.message);
        setResponse(null);
      })
      .finally(() => {
        setSubmitting(false);
        setIsLoading(false);
      });
  };

  return (
    <ConfigurationContainer>
      {!isLoading ? (
        <>
          <Title>Configure Your Chat</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {(props) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    {/*Character 1*/}
                    <SelectField
                      formik={props}
                      fieldName="character1"
                      helperText="Select your character"
                      label="Character 1:"
                      menuItems={MenuItemsCharacter}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    {/*Character 2*/}
                    <SelectField
                      formik={props}
                      fieldName="character2"
                      helperText="Select your character"
                      label="Character 2:"
                      menuItems={MenuItemsCharacter}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    {/*Mood1*/}
                    <SelectField
                      formik={props}
                      fieldName="mood1"
                      helperText="Select the mood for your character"
                      label="Mood for Character 1:"
                      menuItems={MenuItemsMood}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    {/*Mood2*/}
                    <SelectField
                      formik={props}
                      fieldName="mood2"
                      helperText="Select the mood for your character"
                      label="Mood for Character 2:"
                      menuItems={MenuItemsMood}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/*Conversation Topic*/}
                    <MuiFormControl fullWidth>
                      <MuiInputLabel
                        id="topic"
                        shrink={false}
                        sx={{
                          mt: "-48px",
                          ml: "-10px",
                        }}
                      >
                        Conversation Topic:
                      </MuiInputLabel>
                      <MuiTextField
                        variant="outlined"
                        value={props.values.topic}
                        name="topic"
                        placeholder="Enter the topic of the conversation"
                        onChange={(event) =>
                          handleChange(event, props, "topic")
                        }
                      />
                      {/*<ErrorMessage name="topic" component="div" />*/}
                    </MuiFormControl>
                  </Grid>
                  <Grid item xs={12}>
                    {/*Conversation duration*/}
                    <MuiFormControl fullWidth>
                      <MuiInputLabel
                        id="duration"
                        shrink={false}
                        sx={{
                          mt: "-48px",
                          ml: "-10px",
                        }}
                      >
                        Conversation Duration:
                      </MuiInputLabel>
                      <MuiTextField
                        variant="outlined"
                        type="number"
                        value={props.values.duration}
                        name="topic"
                        placeholder="Enter the conversation duration (4-50)"
                        onChange={(event) =>
                          handleChange(event, props, "duration")
                        }
                      />
                      {/*<ErrorMessage name="duration" component="div" />*/}
                    </MuiFormControl>
                  </Grid>
                  <ButtonArea container item xs={12}>
                    <Grid item xs={6} justifyContent="center" display="flex">
                      <Link to="/">
                        <StartButton>Back to Home</StartButton>
                      </Link>
                    </Grid>
                    <Grid item xs={6} justifyContent="center" display="flex">
                      <StartButton type="submit">Start Chat</StartButton>
                    </Grid>
                  </ButtonArea>
                </Grid>
              </Form>
            )}
          </Formik>
        </>
      ) : (
        <>
          <Loader />
          <br />
          <LoadingText>
            Waiting for the characters to enter the chat...
          </LoadingText>
        </>
      )}
    </ConfigurationContainer>
  );
};

export default ConfigurationPage;
