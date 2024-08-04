import { db } from './db';

const handlers = [...db.product.toHandlers('rest')];

export { handlers };
