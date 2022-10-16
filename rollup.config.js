import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/app.tsx',
  output: {
    file: './dist/bundle.tsx'
  },
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json'
    })
  ]
}
