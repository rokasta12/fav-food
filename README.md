# Fav-Food Form with Next.js, Tailwind CSS, Zod, and React Hook Form

This project demonstrates how to build a simple form in Next.js using Tailwind CSS for styling, Zod for form validation, and React Hook Form for managing form state. The form allows users to select their favorite fast food and write a description explaining why they like it.

![Group 13915](https://github.com/rokasta12/fav-food/assets/44666921/c7b8dc67-ffb9-49d1-847b-613354408b82)

## Prerequisites
- Basic understanding of React and TypeScript
- Familiarity with TailwindCSS
- Node and npm/yarn installed in your system

## Setting Up
Clone the repository:

```bash
git clone https://github.com/rokasta12/fav-food.git

cd fav-food
```


Install dependencies:

```bash
yarn install
# or
npm install
```
Start the development server:

```bash
yarn dev
# or
npm run dev
```
Open http://localhost:3000 with your browser to see the result.

## Explanation

The form is contained in the `FavFoodForm.tsx` component. This component uses the `useForm` hook from `react-hook-form` to manage form state and validation. The validation schema is defined with Zod and passed to `useForm` through the `zodResolver`.

The form data type, `FavFoodFormType`, is inferred from the validation schema. The `onSubmit` prop is a function that will be called with the form data when the form is submitted.

On form submission, the form data is displayed as a JSON alert in the browser.

## Live Demo

You can access the live demo at [fav-food.vercel.app](https://fav-food.vercel.app)

## Full Tutorial

For a step-by-step guide on how this project was created, check out the tutorial on [Medium](https://medium.com/@celayirbedirhan/creating-forms-with-tailwindcss-zod-and-react-hook-form-in-typescript-248e44a951e7).

## Feedback

Feel free to [file an issue](https://github.com/rokasta12/fav-food/issues) if you have any questions or suggestions for improvement.


