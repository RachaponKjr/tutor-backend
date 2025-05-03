import Elysia, { t } from "elysia";

const searchTutorBody = t.Object({
  searchText: t.String({
    examples: ["ครูมิ๊ก", "กรุงเทพมหานคร", "สอน GED 2 ปี"],
  }),
});

const bookingTutorBody = t.Object({
  userId: t.Number({ examples: [42] }),
  tutorId: t.Number({ examples: [4] }),
  note: t.Optional(t.String()),
});

const ServiceModel = new Elysia()
  .model("service-search-tutor", searchTutorBody)
  .model("service-booking-tutor", bookingTutorBody);

export default ServiceModel;
