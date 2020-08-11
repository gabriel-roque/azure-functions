import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.res.json({ message: 'Processing PDF file....' });
  context.done();
};

export default httpTrigger;
