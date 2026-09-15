import random, math, os

OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'img')

BG = '#0a0a0a'
FG = '#f2f1ec'
MID = '#3a3a36'

def svg_header(w, h):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">'

def noise_lines(w, h, seed, density=40, stroke=FG, opacity=0.18):
    r = random.Random(seed)
    lines = []
    for _ in range(density):
        x1 = r.uniform(0, w)
        y1 = r.uniform(0, h)
        ang = r.uniform(0, math.pi)
        length = r.uniform(w * 0.1, w * 0.6)
        x2 = x1 + math.cos(ang) * length
        y2 = y1 + math.sin(ang) * length
        sw = r.uniform(0.4, 1.6)
        op = opacity * r.uniform(0.4, 1.2)
        lines.append(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{stroke}" stroke-width="{sw:.2f}" opacity="{op:.2f}"/>')
    return ''.join(lines)

def grain_dots(w, h, seed, count=220, fill=FG, opacity=0.5):
    r = random.Random(seed + 1)
    dots = []
    for _ in range(count):
        x = r.uniform(0, w)
        y = r.uniform(0, h)
        rad = r.uniform(0.4, 1.6)
        op = opacity * r.uniform(0.15, 1)
        dots.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{rad:.2f}" fill="{fill}" opacity="{op:.2f}"/>')
    return ''.join(dots)

def big_form(w, h, seed):
    r = random.Random(seed + 2)
    shape_type = r.choice(['circle', 'arc', 'triangle', 'band'])
    cx, cy = w * r.uniform(0.3, 0.7), h * r.uniform(0.3, 0.7)
    if shape_type == 'circle':
        rad = min(w, h) * r.uniform(0.22, 0.4)
        return f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{rad:.1f}" fill="none" stroke="{FG}" stroke-width="1" opacity="0.5"/>'
    if shape_type == 'band':
        y = h * r.uniform(0.2, 0.8)
        return f'<rect x="0" y="{y:.1f}" width="{w}" height="{h*0.14:.1f}" fill="{FG}" opacity="0.06"/>'
    if shape_type == 'triangle':
        x1, y1 = w * r.uniform(0.1, 0.9), h * r.uniform(0.05, 0.3)
        x2, y2 = w * r.uniform(0.05, 0.4), h * r.uniform(0.6, 0.95)
        x3, y3 = w * r.uniform(0.6, 0.95), h * r.uniform(0.6, 0.95)
        return f'<polygon points="{x1:.1f},{y1:.1f} {x2:.1f},{y2:.1f} {x3:.1f},{y3:.1f}" fill="none" stroke="{FG}" stroke-width="1" opacity="0.45"/>'
    # arc
    rad = min(w, h) * r.uniform(0.3, 0.55)
    start = r.uniform(0, math.pi)
    end = start + r.uniform(math.pi * 0.4, math.pi * 1.2)
    x1, y1 = cx + rad * math.cos(start), cy + rad * math.sin(start)
    x2, y2 = cx + rad * math.cos(end), cy + rad * math.sin(end)
    large = 1 if (end - start) > math.pi else 0
    return f'<path d="M {x1:.1f} {y1:.1f} A {rad:.1f} {rad:.1f} 0 {large} 1 {x2:.1f} {y2:.1f}" fill="none" stroke="{FG}" stroke-width="1" opacity="0.4"/>'

def make_svg(path, w, h, seed, label=None):
    parts = [svg_header(w, h)]
    parts.append(f'<rect width="{w}" height="{h}" fill="{BG}"/>')
    parts.append(noise_lines(w, h, seed))
    parts.append(big_form(w, h, seed))
    parts.append(big_form(w, h, seed + 50))
    parts.append(grain_dots(w, h, seed))
    parts.append(f'<rect width="{w}" height="{h}" fill="none" stroke="{MID}" stroke-width="1"/>')
    if label:
        parts.append(
            f'<text x="24" y="{h-24}" font-family="Helvetica, Arial, sans-serif" '
            f'font-size="11" letter-spacing="2" fill="{FG}" opacity="0.55">{label}</text>'
        )
    parts.append('</svg>')
    with open(path, 'w') as f:
        f.write(''.join(parts))

def ensure(d):
    os.makedirs(d, exist_ok=True)

if __name__ == '__main__':
    ensure(os.path.join(OUT, 'artists'))
    ensure(os.path.join(OUT, 'releases'))
    ensure(os.path.join(OUT, 'visuals'))
    ensure(os.path.join(OUT, 'journal'))

    artist_files = ['ussef777', '2mon666', 'anys', '24snake', 'vali']
    for i, name in enumerate(artist_files):
        make_svg(os.path.join(OUT, 'artists', f'{name}.svg'), 800, 1000, seed=100 + i, label=name.upper())

    for i in range(1, 4):
        make_svg(os.path.join(OUT, 'releases', f'release-0{i}.svg'), 900, 900, seed=200 + i, label=f'NURYS — RELEASE 0{i}')

    orientations = {
        'visual-01': (900, 1200),
        'visual-02': (1400, 900),
        'visual-03': (1000, 1000),
        'visual-04': (900, 1200),
        'visual-05': (1400, 900),
    }
    for i, (name, (w, h)) in enumerate(orientations.items()):
        make_svg(os.path.join(OUT, 'visuals', f'{name}.svg'), w, h, seed=300 + i, label='NURYS')

    make_svg(os.path.join(OUT, 'journal', 'journal-01.svg'), 1200, 800, seed=400, label='NURYS JOURNAL')

    # Hero background — wide, sparse, cinematic
    make_svg(os.path.join(OUT, 'hero-bg.svg'), 1920, 1080, seed=999)

    print('Placeholders generated.')
