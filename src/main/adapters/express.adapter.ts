import { Request, Response } from 'express';
import { Controller } from '../../http/protocols.interface';

const expressRouteAdapter = (controller: Controller) => async (req: Request, res: Response) => {
  try {
    const result = await controller(req);
    return res.status(result.status).send(result.data);
  } catch {
    return res.status(500).send('Internal server error');
  }
};

export default expressRouteAdapter;