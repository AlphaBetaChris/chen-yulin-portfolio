// @ts-expect-error Vitest executes this contract test in Node.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const styles = readFileSync('src/styles.css', 'utf8');

function ruleFor(selector: string) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = styles.match(
    new RegExp(`${escapedSelector}\\s*\\{([^}]*)\\}`),
  );

  expect(match, `Expected to find a CSS rule for ${selector}`).not.toBeNull();
  return match?.[1] ?? '';
}

describe('portfolio visual refinement contract', () => {
  it('removes the decorative page guides and desktop sidebar dividers', () => {
    expect(ruleFor('.site-shell')).not.toContain('linear-gradient(90deg');
    expect(ruleFor('.section-heading')).not.toContain('border-right');
    expect(ruleFor('.contact-heading')).not.toContain('border-right');
  });

  it('balances display copy and tightens the oversized desktop rhythm', () => {
    expect(styles).toContain('text-wrap: balance');
    expect(ruleFor('.copy-segment')).toContain('white-space: nowrap');
    expect(ruleFor('.editorial-section')).toContain(
      'grid-template-columns: clamp(220px, 21vw, 310px) minmax(0, 1fr)',
    );
    expect(ruleFor('.project-card')).toContain('min-height: 430px');
  });
});
