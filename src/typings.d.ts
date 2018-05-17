/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

import { DataTypeAbstract, DefineAttributeColumnOptions } from "sequelize";

type SequelizeAttribute = string | DataTypeAbstract | DefineAttributeColumnOptions;

declare global {
  type SequelizeAttributes<T extends { [key: string]: any }> = {
    [P in keyof T]: SequelizeAttribute
  };
}
