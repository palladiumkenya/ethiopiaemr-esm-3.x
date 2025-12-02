import React from 'react';
import { Button } from '@carbon/react';
import { useConfig, PageHeader, TriagePictogram, launchWorkspace } from '@openmrs/esm-framework';
import { useTranslation } from 'react-i18next';
import { ClinicalWorkflowConfig } from '../config-schema';
import styles from './triage-dashboard.scss';

const TriageDashboard: React.FC = () => {
  const { t } = useTranslation();
  const { triageServices } = useConfig<ClinicalWorkflowConfig>();
  return (
    <>
      <PageHeader title={t('triageDashboard', 'Triage Dashboard')} illustration={<TriagePictogram />} />
      <div className={styles.triageContainer}>
        {triageServices.map((service, index) => (
          <Button
            onClick={() => launchWorkspace('triage-workspace', { workspaceTitle: service })}
            className={styles.buttonStyles}
            key={`${index}-${service}`}>
            {service}
          </Button>
        ))}
      </div>
    </>
  );
};

export default TriageDashboard;
