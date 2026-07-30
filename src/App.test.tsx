import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import App from './App';

describe('portfolio locale behavior', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.lang = 'zh-CN';
  });

  it('starts in Chinese and switches the whole page to English', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(
      screen.getByRole('heading', { name: '陈昱霖', level: 1 }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('zh-CN');

    await user.click(
      screen.getByRole('button', { name: 'Switch to English' }),
    );

    expect(
      screen.getByRole('heading', { name: 'Yulin Chen', level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Selected Projects', level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: '项目经历', level: 2 }),
    ).not.toBeInTheDocument();
    expect(document.documentElement.lang).toBe('en');
    expect(localStorage.getItem('chen-yulin-locale')).toBe('en');
  });

  it('restores the saved English preference on the first render', () => {
    localStorage.setItem('chen-yulin-locale', 'en');

    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Yulin Chen', level: 1 }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('en');
  });
});

describe('portfolio content and accessibility', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the complete real portfolio as semantic sections', () => {
    render(<App />);

    expect(
      screen.getByRole('navigation', { name: '主要导航' }),
    ).toBeInTheDocument();

    for (const heading of [
      '关于我',
      '教育背景',
      '荣誉奖项',
      '项目经历',
      '专业技能',
      '联系方式',
    ]) {
      expect(
        screen.getByRole('heading', { name: heading, level: 2 }),
      ).toBeInTheDocument();
    }

    expect(
      screen.getByRole('heading', { name: '寻迹土家', level: 3 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'HUG', level: 3 }),
    ).toBeInTheDocument();
    expect(screen.getByText('11 / 72')).toBeInTheDocument();
    expect(screen.getByText('预备党员')).toBeInTheDocument();
    expect(screen.getByText('四川省阆中市')).toBeInTheDocument();
    expect(screen.getByAltText('陈昱霖的肖像')).toBeInTheDocument();
  });

  it('exposes real contact details as actionable links', () => {
    render(<App />);

    expect(
      screen.getByRole('link', { name: 'swucyl@email.swu.edu.cn' }),
    ).toHaveAttribute('href', 'mailto:swucyl@email.swu.edu.cn');
    expect(
      screen.getByRole('link', { name: '166-0137-4718' }),
    ).toHaveAttribute('href', 'tel:+8616601374718');
  });
});
