<<<<<<< HEAD
import axios from "axios";

export const fetchProducts = async (
  pageNumberParam = 1,
  pageSizeParam = 10,
) => {
  const { data } = await axios.get(
    `https://localhost:7063/api/Product/Details?PageNumber=${pageNumberParam}&PageSize=${pageSizeParam}`,
  );
  return data;
};

=======
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
>>>>>>> 7b9e6cc1236e76f5c25deba5d4736f218cee5e2e
