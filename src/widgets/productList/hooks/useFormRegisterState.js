import { useForm } from 'react-hook-form';

export const useFormRegisterState = () => {
  const form = useForm({
    mode: 'onChange'
  });
  return form;
};
