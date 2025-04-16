import Elysia, { t } from "elysia"

const createTutorDetailBody = t.Object({
  image: t.String(),
  phoneNumber: t.String(),
  pricePerHour: t.Number(),
  province: t.String(),
  tutorName: t.String(),
  description: t.String(),
  categoryId: t.Array(t.Number()), 
  experience: t.Array(t.String()), 
  userId: t.Number(),
})

const UserModel = new Elysia().model(
  "user-create-tutor-detail",
  createTutorDetailBody
)

export default UserModel
