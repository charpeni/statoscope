import { ExtensionDescriptor } from '@statoscope/stats/spec/extension';
import Generator from './generator';

const adapter: ExtensionDescriptor = { name: 'test-adapter', version: '7.7.7' };

test('should work', () => {
  const generator = new Generator(adapter);

  generator.handleReport({
    context: 'context',
    data: 'data',
    id: 'foo',
    name: 'name',
    view: ['some-ui'],
  });

  generator.handleReport({
    context: 'context2',
    data: 'data2',
    id: 'foo2',
    name: 'name2',
    view: ['some-ui2'],
    compilation: 'foo-compilation',
    relations: [{ type: 'module', id: 'foo' }],
  });

  expect(generator.get()).toMatchSnapshot();
});

test('should throw an exception', () => {
  const generator = new Generator(adapter);

  generator.handleReport({
    context: 'context',
    data: 'data',
    id: 'foo',
    name: 'name',
    view: ['some-ui'],
  });

  expect(
    generator.handleReport.bind(generator, {
      context: 'context2',
      data: 'data2',
      id: 'foo',
      name: 'name2',
      view: ['some-ui2'],
    })
  ).toThrow();
});
