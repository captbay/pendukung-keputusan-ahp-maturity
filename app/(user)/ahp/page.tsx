import React, { useState } from 'react';
import AHPPage from '@/app/ui/ahp-page/ahpPage';
import { auth } from '@/auth';

export default async function AHP() {
  const session = await auth();
  return (
    <AHPPage 
      session={session}
    />
  );
}
