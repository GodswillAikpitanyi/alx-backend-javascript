import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const promPhoto = await uploadPhoto();
    const promUser = await createUser();

    return ({ photo: promPhoto, user: promUser });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
