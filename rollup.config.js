import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/app.tsx',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
      exclude: 'src/index.tsx'
    })
  ],
  external: ['react', 'react-dom', 'typescript']
}
