import { openmrsFetch, restBaseUrl } from '@openmrs/esm-framework';
import useSWR from 'swr';

export const useTriageForm = (formName?: string) => {
  const url = `${restBaseUrl}/form?q=Admission`;
  const { data, isLoading, error, mutate } = useSWR(url, openmrsFetch);
  return {
    data: data?.data,
    isLoading,
    error,
    mutate,
  };
};

export const usePatientInformation = (patientName?: string) => {
  const url = `${restBaseUrl}/patient?q=${patientName}&v=custom:(uuid,display,person:(age,gender))`;
  const { data, isLoading, error, mutate } = useSWR(url, openmrsFetch);
  return {
    data: data?.data,
    isLoading,
    error,
    mutate,
  };
};

export const registerPatient = (patientPayload: Record<string, unknown>) => {
  const url = `${restBaseUrl}/patient`;
  return openmrsFetch(url, {
    method: 'POST',
    body: JSON.stringify(patientPayload),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
