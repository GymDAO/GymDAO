import { redirect } from 'next/navigation';

export const serverErrorRedirect = (error: any) => {
  redirect(`/error/${error.message.split(' ')[1]}`);
};
