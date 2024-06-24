import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react';
import Home from "../src/app/page";
 
test('Home', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 1, name: `Welcoming you on board, is it faster, let's see` })).toBeDefined()
})