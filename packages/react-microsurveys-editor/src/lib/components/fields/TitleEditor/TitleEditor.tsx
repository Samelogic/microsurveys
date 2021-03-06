import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { Form } from '@samelogic/microsurveys-types';
import { Control, Controller, useFormContext } from 'react-hook-form';
import { BaseFieldProps } from '../BaseFieldProps';
import QuestionProperties from '../shared/QuestionProperties/QuestionProperties';
import QuestionTitle from '../shared/QuestionTitle/QuestionTitle';

/* eslint-disable-next-line */
export interface TitleEditorProps {}

const StyledTitleEditor = styled.div`
  padding: 0.5em;
  margin: 0.5em;
`;

export function TitleEditor() {
  const { control } = useFormContext<Form>();

  return (
    <StyledTitleEditor>
      <Controller
        name={`title`}
        control={control}
        rules={{
          required: {
            value: true,
            message: 'A form title is required.',
          },
        }}
        render={({ field, fieldState }) => (
          <TextField
            fullWidth
            error={fieldState?.error ? true : false}
            helperText={fieldState?.error?.message}
            variant="outlined"
            label="Microsurvey Title"
            placeholder=""
            {...field}
          />
        )}
      />
    </StyledTitleEditor>
  );
}

export default TitleEditor;
