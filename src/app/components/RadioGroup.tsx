import { Field } from 'formik';
import capitalize from '../utils/capitalize';

type Props = {
  name: string;
  values: string[];
  title: string;
  checked?: string;
};

const RadioGroup = ({ name, values, title, checked }: Props) => {
  return (
    <div className='mb-4 w-fit text-center md:text-left'>
      <h3 className='font-medium uppercase underline' id={name}>
        {title}
      </h3>
      <div className='flex flex-col gap-2' role='group' aria-labelledby={name}>
        {values.map((value) => (
          <label
            className={`font-medium transition-all duration-200 md:cursor-pointer ${
              checked?.toLowerCase() === value ? 'text-secondary' : 'text-primary'
            }`}
            key={value}
          >
            <Field
              className='pointer-events-none fixed opacity-0'
              type='radio'
              name={name}
              value={value}
            />
            {capitalize(value)}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
