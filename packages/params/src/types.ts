/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Compile-time chain configuration
 */
export type BeaconPreset = {
  // Misc
  MAX_COMMITTEES_PER_SLOT: number;
  TARGET_COMMITTEE_SIZE: number;
  MAX_VALIDATORS_PER_COMMITTEE: number;

  SHUFFLE_ROUND_COUNT: number;

  HYSTERESIS_QUOTIENT: number;
  HYSTERESIS_DOWNWARD_MULTIPLIER: number;
  HYSTERESIS_UPWARD_MULTIPLIER: number;

  // Gwei Values
  MIN_DEPOSIT_AMOUNT: number;
  MAX_EFFECTIVE_BALANCE: number;
  EFFECTIVE_BALANCE_INCREMENT: number;

  // Time parameters
  MIN_ATTESTATION_INCLUSION_DELAY: number;
  SLOTS_PER_EPOCH: number;
  MIN_SEED_LOOKAHEAD: number;
  MAX_SEED_LOOKAHEAD: number;
  EPOCHS_PER_ETH1_VOTING_PERIOD: number;
  SLOTS_PER_HISTORICAL_ROOT: number;
  MIN_EPOCHS_TO_INACTIVITY_PENALTY: number;

  // State vector lengths
  EPOCHS_PER_HISTORICAL_VECTOR: number;
  EPOCHS_PER_SLASHINGS_VECTOR: number;
  HISTORICAL_ROOTS_LIMIT: number;
  VALIDATOR_REGISTRY_LIMIT: number;

  // Reward and penalty quotients
  BASE_REWARD_FACTOR: number;
  WHISTLEBLOWER_REWARD_QUOTIENT: number;
  PROPOSER_REWARD_QUOTIENT: number;
  INACTIVITY_PENALTY_QUOTIENT: number;
  MIN_SLASHING_PENALTY_QUOTIENT: number;
  PROPORTIONAL_SLASHING_MULTIPLIER: number;

  // Max operations per block
  MAX_PROPOSER_SLASHINGS: number;
  MAX_ATTESTER_SLASHINGS: number;
  MAX_ATTESTATIONS: number;
  MAX_DEPOSITS: number;
  MAX_VOLUNTARY_EXITS: number;

  // ALTAIR
  /////////
  SYNC_COMMITTEE_SIZE: number;
  EPOCHS_PER_SYNC_COMMITTEE_PERIOD: number;
  INACTIVITY_PENALTY_QUOTIENT_ALTAIR: number;
  MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR: number;
  PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR: number;
  MIN_SYNC_COMMITTEE_PARTICIPANTS: number;
  UPDATE_TIMEOUT: number;

  // BELLATRIX
  ////////////
  INACTIVITY_PENALTY_QUOTIENT_BELLATRIX: number;
  MIN_SLASHING_PENALTY_QUOTIENT_BELLATRIX: number;
  PROPORTIONAL_SLASHING_MULTIPLIER_BELLATRIX: number;
  MAX_BYTES_PER_TRANSACTION: number;
  MAX_TRANSACTIONS_PER_PAYLOAD: number;
  BYTES_PER_LOGS_BLOOM: number;
  MAX_EXTRA_DATA_BYTES: number;

  // CAPELLA
  //////////
  MAX_BLS_TO_EXECUTION_CHANGES: number;
  MAX_WITHDRAWALS_PER_PAYLOAD: number;
  MAX_VALIDATORS_PER_WITHDRAWALS_SWEEP: number;

  // DENEB
  ///////////
  FIELD_ELEMENTS_PER_BLOB: number;
  MAX_BLOB_COMMITMENTS_PER_BLOCK: number;
  MAX_BLOBS_PER_BLOCK: number;
  KZG_COMMITMENT_INCLUSION_PROOF_DEPTH: number;

  // EIP6110
  MAX_DEPOSIT_RECEIPTS_PER_PAYLOAD: number;
};

/**
 * Presets only contain numbers, just used to filter out extraneous keys
 * when overriding the active preset with custom values from file
 */
export const beaconPresetTypes: BeaconPresetTypes = {
  // Misc
  MAX_COMMITTEES_PER_SLOT: "number",
  TARGET_COMMITTEE_SIZE: "number",
  MAX_VALIDATORS_PER_COMMITTEE: "number",

  SHUFFLE_ROUND_COUNT: "number",

  HYSTERESIS_QUOTIENT: "number",
  HYSTERESIS_DOWNWARD_MULTIPLIER: "number",
  HYSTERESIS_UPWARD_MULTIPLIER: "number",

  // Gwei Values
  MIN_DEPOSIT_AMOUNT: "number",
  MAX_EFFECTIVE_BALANCE: "number",
  EFFECTIVE_BALANCE_INCREMENT: "number",

  // Time parameters
  MIN_ATTESTATION_INCLUSION_DELAY: "number",
  SLOTS_PER_EPOCH: "number",
  MIN_SEED_LOOKAHEAD: "number",
  MAX_SEED_LOOKAHEAD: "number",
  EPOCHS_PER_ETH1_VOTING_PERIOD: "number",
  SLOTS_PER_HISTORICAL_ROOT: "number",
  MIN_EPOCHS_TO_INACTIVITY_PENALTY: "number",

  // State vector lengths
  EPOCHS_PER_HISTORICAL_VECTOR: "number",
  EPOCHS_PER_SLASHINGS_VECTOR: "number",
  HISTORICAL_ROOTS_LIMIT: "number",
  VALIDATOR_REGISTRY_LIMIT: "number",

  // Reward and penalty quotients
  BASE_REWARD_FACTOR: "number",
  WHISTLEBLOWER_REWARD_QUOTIENT: "number",
  PROPOSER_REWARD_QUOTIENT: "number",
  INACTIVITY_PENALTY_QUOTIENT: "number",
  MIN_SLASHING_PENALTY_QUOTIENT: "number",
  PROPORTIONAL_SLASHING_MULTIPLIER: "number",

  // Max operations per block
  MAX_PROPOSER_SLASHINGS: "number",
  MAX_ATTESTER_SLASHINGS: "number",
  MAX_ATTESTATIONS: "number",
  MAX_DEPOSITS: "number",
  MAX_VOLUNTARY_EXITS: "number",

  // ALTAIR
  /////////
  SYNC_COMMITTEE_SIZE: "number",
  EPOCHS_PER_SYNC_COMMITTEE_PERIOD: "number",
  INACTIVITY_PENALTY_QUOTIENT_ALTAIR: "number",
  MIN_SLASHING_PENALTY_QUOTIENT_ALTAIR: "number",
  PROPORTIONAL_SLASHING_MULTIPLIER_ALTAIR: "number",
  MIN_SYNC_COMMITTEE_PARTICIPANTS: "number",
  UPDATE_TIMEOUT: "number",

  // BELLATRIX
  ////////////
  INACTIVITY_PENALTY_QUOTIENT_BELLATRIX: "number",
  MIN_SLASHING_PENALTY_QUOTIENT_BELLATRIX: "number",
  PROPORTIONAL_SLASHING_MULTIPLIER_BELLATRIX: "number",
  MAX_BYTES_PER_TRANSACTION: "number",
  MAX_TRANSACTIONS_PER_PAYLOAD: "number",
  BYTES_PER_LOGS_BLOOM: "number",
  MAX_EXTRA_DATA_BYTES: "number",

  // CAPELLA
  //////////
  MAX_BLS_TO_EXECUTION_CHANGES: "number",
  MAX_WITHDRAWALS_PER_PAYLOAD: "number",
  MAX_VALIDATORS_PER_WITHDRAWALS_SWEEP: "number",

  // DENEB
  ///////////
  FIELD_ELEMENTS_PER_BLOB: "number",
  MAX_BLOB_COMMITMENTS_PER_BLOCK: "number",
  MAX_BLOBS_PER_BLOCK: "number",
  KZG_COMMITMENT_INCLUSION_PROOF_DEPTH: "number",

  // EIP6110
  MAX_DEPOSIT_RECEIPTS_PER_PAYLOAD: "number",
};

type BeaconPresetTypes = {
  [K in keyof BeaconPreset]: "number";
};
