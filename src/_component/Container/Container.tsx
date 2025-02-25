import React from 'react'
import Card from './Card'
import { Crown, Calendar, Trophy, ChartLine } from 'lucide-react'

export default function Container() {
  return (
    <div className='flex flex-wrap gap-8 justify-center'>
      <Card icon={Crown} number='536' text='Satisfied Clients' />
      <Card icon={Calendar} number='10' text='Proven Experience' />
      <Card icon={Trophy} number='536' text='Resolved Cases' />
      <Card icon={ChartLine} number='536' text='High Performance' />
    </div>
  )
}
