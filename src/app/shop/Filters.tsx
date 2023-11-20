import { Form, Formik } from 'formik';
import RadioGroup from '../components/RadioGroup';

const Filters = () => {
  return (
    <div className='flex w-full justify-center px-10 md:block md:px-0'>
      <Formik
        initialValues={{
          category: 'all',
        }}
        onSubmit={() => {}}
      >
        {({ values }) => (
          <Form className='md:grid md:grid-cols-2 md:place-items-center md:gap-4 xl:grid-cols-1'>
            <RadioGroup
              title='categories'
              name='category'
              values={['all', 'phones', 'tablets', 'watches']}
              checked={values.category}
            />
            <RadioGroup
              title='categories'
              name='category'
              values={['all', 'phones', 'tablets', 'watches']}
              checked={values.category}
            />
            <RadioGroup
              title='categories'
              name='category'
              values={['all', 'phones', 'tablets', 'watches']}
              checked={values.category}
            />
            <RadioGroup
              title='categories'
              name='category'
              values={['all', 'phones', 'tablets', 'watches']}
              checked={values.category}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filters;
