import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import App from './App';

describe('portfolio locale behavior', () => {
  beforeEach(() => {
    document.documentElement.lang = 'en';
  });

  it('starts every page load in English', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Yulin Chen', level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Selected Projects', level: 2 }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('en');
  });

  it('switches the whole page to Chinese for the current session', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(
      screen.getByRole('button', { name: '切换至中文' }),
    );

    expect(
      screen.getByRole('heading', { name: '陈昱霖', level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: '项目经历', level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Selected Projects', level: 2 }),
    ).not.toBeInTheDocument();
    expect(screen.getByText('中共党员')).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('zh-CN');
  });

  it('returns to English when the page is loaded again', async () => {
    const user = userEvent.setup();
    const firstPage = render(<App />);

    await user.click(
      screen.getByRole('button', { name: '切换至中文' }),
    );
    expect(
      screen.getByRole('heading', { name: '陈昱霖', level: 1 }),
    ).toBeInTheDocument();

    firstPage.unmount();
    render(<App />);

    expect(
      screen.getByRole('heading', { name: 'Yulin Chen', level: 1 }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('en');
  });
});

describe('portfolio content and accessibility', () => {
  it('renders the complete real portfolio as semantic sections', () => {
    render(<App />);

    expect(
      screen.getByRole('navigation', { name: 'Primary navigation' }),
    ).toBeInTheDocument();

    for (const heading of [
      'About Me',
      'Education',
      'Honors & Awards',
      'Selected Projects',
      'Skills & Toolkit',
      'Contact',
    ]) {
      expect(
        screen.getByRole('heading', { name: heading, level: 2 }),
      ).toBeInTheDocument();
    }

    expect(
      screen.getByRole('heading', { name: 'Tracing Tujia', level: 3 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'HUG', level: 3 }),
    ).toBeInTheDocument();
    expect(screen.getByText('7 / 72')).toBeInTheDocument();
    expect(screen.getByText('CPC Member')).toBeInTheDocument();
    expect(screen.getByText('Langzhong, Sichuan')).toBeInTheDocument();
    expect(screen.getByAltText('Portrait of Yulin Chen')).toBeInTheDocument();
  });

  it('shows the updated major ranking consistently in both languages', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByText('7 / 72')).toBeInTheDocument();
    expect(screen.getByText('7 / 72 (Top 10%)')).toBeInTheDocument();
    expect(screen.queryByText(/11 \/ 72/)).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '切换至中文' }));

    expect(screen.getByText('7 / 72（前 10%）')).toBeInTheDocument();
    expect(screen.queryByText(/11 \/ 72/)).not.toBeInTheDocument();
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

  it('exposes the verified GitHub profile from the hero and contact area', () => {
    render(<App />);

    const githubLinks = screen.getAllByRole('link', { name: 'GitHub' });

    expect(githubLinks).toHaveLength(2);
    for (const link of githubLinks) {
      expect(link).toHaveAttribute(
        'href',
        'https://github.com/AlphaBetaChris',
      );
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    }
  });

  it('keeps Chinese display copy in natural phrase segments', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(
      screen.getByRole('button', { name: '切换至中文' }),
    );

    for (const phrase of [
      '与好奇心，',
      '在竞赛、开发',
      '与质量保障角色。',
      '认真解决的问题。',
    ]) {
      expect(screen.getByText(phrase)).toHaveClass('copy-segment');
    }
  });
});
