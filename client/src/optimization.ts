//import { FlowFlags } from "typescript";

export interface Point {
  flowPerDay: number,
  dollarsPerDay: number,
}
interface WaterOperation {
  name: string,
  id: string,
  revenueStructure: Point[],
}

export interface ServerRequest {
  flowRateIn: number;
  operations: WaterOperation[];
  type: "CURRENT_STATE";
};

export interface ServerResponse {
  incrementalRevenue: number,
  revenuePerDay: number,
  flowRateIn: number,
  flowRateToOperations: number,
  type: "OPTIMATION_RESULT",
  currentPitVolume?: number ,
  maximumPitVolume?: number ,
}

export type ClientResponse = {
  operationId: string,
  flowRate: number,
}[];

// finds max dollarsPerDay value within revenueStructure
function maxVal(op: WaterOperation){
  const maxPrice = Math.max.apply(Math, op.revenueStructure.map(function(p) {return p.dollarsPerDay;}));
  const maxFlow = op.revenueStructure.find(function(p) { return p.dollarsPerDay === maxPrice})?.flowPerDay;
  if (!maxFlow) {
    return 0;
  }
  return maxFlow;
}

// ensures that the flow limit is not breached
function overload(currFlow: number, desFlow: number, maxFlow: number, opLeft: number){
  // minimum flow is equal split of residual maxFlow
  var flow = (maxFlow - currFlow) / opLeft;

  // check if desired flow exceeds max flow
  if ((desFlow + currFlow) < maxFlow) {
    flow = desFlow;
  }
  return flow;
}

// uses naive greedy algorithm to calculate flow per operation
export function processRequest(request: ServerRequest): ClientResponse {
  //calculate maximum flow, leave some flow free
  const maxFlow = request.flowRateIn - (10 * request.operations.length);
  var opLeft = request.operations.length;
  var currFlow = 0;
  return request.operations.map(operation => {
    const flow = overload(currFlow, maxVal(operation), maxFlow, opLeft);
    currFlow += flow;
    opLeft--;
    return {
      operationId: operation.id,
      flowRate: flow, //find flow rate
    }
  })
}