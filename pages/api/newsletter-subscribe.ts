// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as SibApiV3Sdk from "@sendinblue/client";
import dotenv from "dotenv";

dotenv.config();

const sibApiKey: any = process.env.SIB_API_KEY;
const sibStyleGSListId: any = process.env.SIB_STYLE_GS_LIST_ID;
const sibListIdInNumber: number = parseInt(sibStyleGSListId);

const contactsApi = new SibApiV3Sdk.ContactsApi();
contactsApi.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, sibApiKey);

async function checkIfUserExists(email: string): Promise<any> {
  try {
    const contact: any = await contactsApi.getContactInfo(email);
    if (contact.body.id) {
      return contact;
    } else {
      return null;
    }
  } catch (err: any) {
    return null;
  }
}

async function addUserToList(email: string): Promise<string> {
  try {
    const contact = await checkIfUserExists(email);
    if (!contact) {
      const newContact: any = await contactsApi.createContact({
        email: email,
        listIds: [sibListIdInNumber],
      });

      if (newContact.body.id) {
        return "User created and added to the list.";
      }
    } else if (contact.body.id) {
      if (contact.body.listIds.includes(sibListIdInNumber)) {
        return "User is already subscribed.";
      } else {
        let contactEmails = new SibApiV3Sdk.AddContactToList();
        contactEmails.emails = [email];
        await contactsApi.addContactToList(sibListIdInNumber, contactEmails);
        return "User added to the list.";
      }
    }
  } catch (error: any) {
    // Handle API errors
    console.error("Error occurred while adding the user:", error.body);
    throw new Error("An error occurred while adding the user.");
  }

  throw new Error("Unexpected response while adding the user.");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const result = await addUserToList(email);
      res.status(200).json({ message: result });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
