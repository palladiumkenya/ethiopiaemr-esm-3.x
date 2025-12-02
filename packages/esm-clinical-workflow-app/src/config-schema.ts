import { Type } from '@openmrs/esm-framework';

export const configSchema = {
  triageServices: {
    _type: Type.Array,
    _description: 'List of triage services to be displayed in the triage dashboard',
    _elements: { _type: Type.String },
    _default: ['Central Triage', 'Pediatrics Triage', 'Emergency Triage'],
  },
};

export type ClinicalWorkflowConfig = {
  triageServices: Array<string>;
};
