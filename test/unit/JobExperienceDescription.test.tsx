import {describe, test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import { JobExperienceDescription } from '../../src/components/JobExperienceDescription';
import React from 'react';

describe("Job Experience Description Component test", () => {
    test("Should show title", () => {
        render(<JobExperienceDescription experienceDescription={{
            summary: "Testing",
            details: ["Camarao"]
         }} />);
        expect(screen.getByText(/Testing/i)).toBeDefined()
    })
})