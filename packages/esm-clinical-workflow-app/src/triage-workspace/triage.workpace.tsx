import React from 'react';
import { usePatientInformation, useTriageForm } from './triage.resource';

const TriageWorkspace: React.FC = () => {
  const { data, isLoading, error } = usePatientInformation('James');
  console.log('Patient Information:', data);
  return (
    <div>
      <h1>Triage Workspace</h1>
      {/* Additional triage workspace components and logic will go here */}
    </div>
  );
};

export default TriageWorkspace;
