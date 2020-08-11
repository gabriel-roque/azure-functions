import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.res.json({ message: 'Hello Wolrd! I am a simple Function!' });
  context.done();
};

export default httpTrigger;
