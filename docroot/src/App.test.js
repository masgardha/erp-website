import { render, screen } from '@testing-library/react';
import App from './App';
import FishBash from './Logic/FishBash';
import SortNumbers from './Logic/SortNumbers';


test('renders learn react link', () => {
  render(<App />);
});

describe('SortNumbers Component', () => {
  test('Renders numbers in Ascending and Descending Order', () => {
      const numbers = [5, 3, 8, 1, 2];
      render(<SortNumbers numbers={numbers} />);
      expect(screen.getByText('Descending Order: 8, 5, 3, 2, 1')).toBeInTheDocument();
  });
});

describe('FishBash Component', () => {
  test('Renders Fish for numbers divisible by 3', () => {
    render(<FishBash count={9} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('fish')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('bash')).toBeInTheDocument();
    expect(screen.getByText('fish')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('fish')).toBeInTheDocument();
  });
});

describe('SortNumbers Component', () => {
  test('Renders numbers in Ascending and Descending Order', () => {
    const numbers = [5, 3, 8, 1, 2];
    render(<SortNumbers numbers={numbers} />);

    expect(screen.getByText('Ascending Order: 1, 2, 3, 5, 8')).toBeInTheDocument();

    expect(screen.getByText('Descending Order: 8, 5, 3, 2, 1')).toBeInTheDocument();
  });
});

describe('IsPalindrome Component', () => {
  test('Renders "is a Palindrome" for a Palindrome string', () => {
    render(<IsPalindrome inputString="level" />);
    expect(screen.getByText('level is a Palindrome')).toBeInTheDocument();
  });

  test('Renders "is not a Palindrome" for a non-Palindrome string', () => {
    render(<IsPalindrome inputString="hello" />);
    expect(screen.getByText('hello is not a Palindrome')).toBeInTheDocument();
  });
});
