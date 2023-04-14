export type UsecaseHandler<Props, Repository, Result> = (
  props: Props,
  repository: Repository
) => Promise<Result>;
