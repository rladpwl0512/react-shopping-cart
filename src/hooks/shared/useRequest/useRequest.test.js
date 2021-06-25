import useRequest from '.';
import { renderHook } from '@testing-library/react-hooks';
import { requestProductList } from '../../service/request/productList';
import { ERROR } from '../../constants/error';
import CustomError from '../../../utils/CustomError';

describe('useRequest', () => {
  test('loading', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRequest(() => requestProductList()));

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
  });

  test('error', async () => {
    const { result } = renderHook(() =>
      useRequest(() => {
        throw new CustomError(ERROR.NETWORK, '에러났어용');
      })
    );

    expect(result.error).toEqual(Error(ERROR.NETWORK));
  });

  test('data fetch', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRequest(() => requestProductList()));

    await waitForNextUpdate();

    expect(result.current.data).not.toBe(null);
  });
});