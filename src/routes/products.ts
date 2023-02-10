import { Router } from "express";
import { Request, Response } from "express";

const productList = [
  {
    id: 1,
    productName: "The Levi's® Men's 512™ Slim Tape",
    price: 78,
    image:
      "https://lsco.scene7.com/is/image/lsco/A46770006-dynamic1-pdp-lse?fmt=avif&qlt=40&resMode=bisharp&op_usm=0.6,0.6,8&fit=crop,0&wid=750&hei=819",
  },
  {
    id: 2,
    productName: "501® Levi's® Original Jeans",
    price: 110,
    image:
      "https://lsco.scene7.com/is/image/lsco/045114102-front-pdp-lse?fmt=avif&qlt=40&resMode=bisharp&op_usm=0.6,0.6,8&fit=crop,0&wid=750&hei=819",
  },
  {
    id: 3,
    productName: "519™ Extreme Skinny Hi-Ball Jeans",
    price: 60,
    image:
      "https://lsco.scene7.com/is/image/lsco/288331117-front-pdp-lse?fmt=avif&qlt=40&resMode=bisharp&op_usm=0.6,0.6,8&fit=crop,0&wid=750&hei=819",
  },
];

const router = Router();
// get all users
router.get("/", (req: Request, res: Response) => {
  res.json(productList);
});

// get user by id
router.get("/:id", (req, res) => {
  const foundUser = productList.find(
    (product) => product.id === Number(req.params.id)
  );
  res.json(foundUser);
});

// add new user
router.post("/", (req: Request, res) => {
  productList.push(req.body);
  res.json(productList);
});

// delete user by id
router.delete("/:id", (req, res) => {
  const result = productList.filter(
    (user) => user.id !== Number(req.params.id)
  );
  res.json(result);
});

export default router;
