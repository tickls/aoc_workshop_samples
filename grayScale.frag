vec3 grayScale(vec3 color) {
    vec3 val = vec3(dot(vec3(0.3, 0.59, 0.11), color));
    
    return val;
}