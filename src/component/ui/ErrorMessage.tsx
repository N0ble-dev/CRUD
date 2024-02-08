interface Iprops {
  errorMessages: string;
}

const ErrorMessage = ({ errorMessages }: Iprops) => {
  return <span className="mt-2 text-sm text-red-500 ">{errorMessages}</span>;
};
export default ErrorMessage;
