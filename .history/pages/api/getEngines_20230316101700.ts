import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../lib/chatgpt";

type Option = {
    value : string;
    label : string;
};

type Data = {
    modelOptions: Option[];
};

export default async function handler()

)