'use strict';

const ORDER_CLOSED = 'CLOSED';
const ORDER_CONTRACTED = 'CONTRACTED';
const BUDGET_CLOSED = 'CLOSED';
const BUDGET_CONTRACTED = 'CONTRACTED';
/**
 * Transaction processor functions
 */


/**
* Published transaction processor .
* @param {sdc.network.CancelContract} contract The published contract instance.
* @transaction
*/
function cancelContract(contract) {
  return getAssetRegistry('sdc.network.Contract')
    .then(function (assetRegistry) {
      var currentContract = assetRegistry.get(contract.contractHash); 
      currentContract.status = 'CANCELED';
      return assetRegistry.update(currentContract);    
    })
}