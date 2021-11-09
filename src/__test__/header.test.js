import React from 'react';
import Header from '../components/header/header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';



test("This should render the Header component corect", () => {
    const { getByText } = render(<Header />);
    expect(getByText('Gecko Client')).toBeInTheDocument();
})
