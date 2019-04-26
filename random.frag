float N21(vec2 p) {
    p = fract(p * vec2(237.74, 1201.17));
    p += dot(p, p + 85.51);

    return fract(p.x * p.y);
}

vec2 N22(vec2 p) {
    float n = N21(p);

    return vec2(n, N21(p+n));
}