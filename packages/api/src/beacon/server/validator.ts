import {ChainForkConfig} from "@lodestar/config";
import {Api, ReqTypes, routesData, getReturnTypes, getReqSerializers} from "../routes/validator.js";
import {ServerRoutes, getGenericJsonServer} from "../../utils/server/index.js";
import {ServerApi} from "../../interfaces.js";

export function getRoutes(config: ChainForkConfig, api: ServerApi<Api>): ServerRoutes<Api, ReqTypes> {
  const reqSerializers = getReqSerializers();
  const returnTypes = getReturnTypes();

  // Most of routes return JSON, use a server auto-generator
  const serverRoutes = getGenericJsonServer<ServerApi<Api>, ReqTypes>(
    {routesData, getReturnTypes, getReqSerializers},
    config,
    api
  );
  return {
    ...serverRoutes,
    produceBlockV3: {
      ...serverRoutes.produceBlockV3,
      handler: async (req, res) => {
        const response = await api.produceBlockV3(...reqSerializers.produceBlockV3.parseReq(req));
        res.header("Eth-Consensus-Version", response.version);
        return returnTypes.produceBlockV3.toJson(response);
      },
    },
  };
}
