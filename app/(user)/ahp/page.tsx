import React, { useState } from 'react';
import AHPPage from '@/app/ui/ahp-page/ahpPage';
import { auth } from '@/auth';
import { getPerUserFormAhp } from '@/lib/actions';

export default async function AHP() {
  const session = await auth();
  const userAhpData = await getPerUserFormAhp(session!.user.id);
  return (
    <AHPPage 
      session={session}
      userAhpData={userAhpData!.data}
    />
  );
}
